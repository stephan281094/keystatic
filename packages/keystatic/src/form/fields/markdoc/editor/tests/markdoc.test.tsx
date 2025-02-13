/** @jest-environment jsdom */
/** @jsxRuntime classic */
/** @jsx jsx */
import { EditorStateDescription, jsx, toEditorState } from './utils';
import { markdocToProseMirror } from '../markdoc/parse';
import { proseMirrorToMarkdoc } from '../markdoc/serialize';
import Markdoc from '@markdoc/markdoc';
import { createEditorSchema } from '../schema';

const schema = createEditorSchema({});

function toMarkdoc(node: EditorStateDescription) {
  return Markdoc.format(
    Markdoc.parse(Markdoc.format(proseMirrorToMarkdoc(node.get().doc)))
  );
}

function fromMarkdoc(markdoc: string) {
  return toEditorState(markdocToProseMirror(Markdoc.parse(markdoc), schema));
}

test('basic', () => {
  expect(
    toMarkdoc(
      <doc>
        <paragraph>
          <text>Something</text>
        </paragraph>
        <heading level={1}>
          <text>Heading</text>
        </heading>
        <paragraph />
      </doc>
    )
  ).toMatchInlineSnapshot(`
    "Something

    # Heading
    "
  `);
});

test('nested list', () => {
  const markdoc = toMarkdoc(
    <doc>
      <unordered_list>
        <list_item>
          <paragraph>
            <text>Something</text>
          </paragraph>
          <unordered_list>
            <list_item>
              <paragraph>
                <text>Something</text>
              </paragraph>
            </list_item>
          </unordered_list>
        </list_item>
      </unordered_list>
      <paragraph />
    </doc>
  );
  expect(markdoc).toMatchInlineSnapshot(`
    "- Something

      - Something
    "
  `);
  expect(fromMarkdoc(markdoc)).toMatchInlineSnapshot(`
    <doc>
      <unordered_list>
        <list_item>
          <paragraph>
            <text>
              <cursor />
              Something
            </text>
          </paragraph>
          <unordered_list>
            <list_item>
              <paragraph>
                <text>
                  Something
                </text>
              </paragraph>
            </list_item>
          </unordered_list>
        </list_item>
      </unordered_list>
    </doc>
  `);
});

test('inline code', () => {
  const markdoc = toMarkdoc(
    <doc>
      <paragraph>
        <text>Something</text>
      </paragraph>
      <heading level={1}>
        <text>Heading</text>
      </heading>
      <paragraph>
        <text code>a</text>
      </paragraph>
    </doc>
  );
  expect(markdoc).toMatchInlineSnapshot(`
    "Something

    # Heading

    \`a\`
    "
  `);
  expect(fromMarkdoc(markdoc)).toMatchInlineSnapshot(`
    <doc>
      <paragraph>
        <text>
          <cursor />
          Something
        </text>
      </paragraph>
      <heading
        level={1}
      >
        <text>
          Heading
        </text>
      </heading>
      <paragraph>
        <text
          code={true}
        >
          a
        </text>
      </paragraph>
    </doc>
  `);
});
