import { Component } from '@angular/core';
import { Tree } from '../../../../../../lib/src/core/components/tree/tree.component';
import { CodeBlockComponent } from '../shared/components/code-block.component';
import { TreeNode } from '../../../../../../lib/src/core/components/tree/shared/components/tree-node/tree-node.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Badge, Icon } from '../../../../../../lib/src/public-api';

@Component({
  selector: 'app-tree-documentation',
  template: `<h1>Tree</h1>
    <span>
      The Tree component is a hierarchical structure that supports drag-and-drop
      functionality and nested nodes.
    </span>
    <h2>Angular</h2>
    <code-block [code]="angularImport" />

    <h2>Properties</h2>
    <span
      >This section applies to both <strong>Tree</strong> and
      <strong>TreeNode</strong>.</span
    >
    <div class="table-wrapper">
      <table>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        <tr>
          <td><strong>draggable</strong></td>
          <td><code>boolean</code></td>
          <td>Indicates whether the tree or node is draggable.</td>
        </tr>
        <tr>
          <td><strong>extended</strong></td>
          <td><code>boolean</code></td>
          <td>Indicates whether the node is expanded.</td>
        </tr>
        <tr>
          <td><strong>maxWidth</strong></td>
          <td><code>string</code></td>
          <td>Specifies the maximum width of the tree.</td>
        </tr>
        <tr>
          <td><strong>closeRecursively</strong></td>
          <td><code>boolean</code></td>
          <td>
            If set to <code>true</code>, closing a node will recursively close
            all its child nodes.
          </td>
        </tr>
      </table>
    </div>

    <h2>Basic Example</h2>
    <code-block [code]="basicUsage" />
    <div class="documentation-playground">
      <r-tree [maxWidth]="'240px'">
        <r-tree-node>Node 1</r-tree-node>
        <r-tree-node>Node 2</r-tree-node>
      </r-tree>
    </div>

    <h2>With Nested Nodes</h2>
    <code-block [code]="nestedUsage" />
    <div class="documentation-playground">
      <r-tree [maxWidth]="'240px'">
        <r-tree-node>
          Parent Node
          <r-tree>
            <r-tree-node>Child Node 1</r-tree-node>
            <r-tree-node>Child Node 2</r-tree-node>
          </r-tree>
        </r-tree-node>
      </r-tree>
    </div>

    <h2>With Recursive Closing</h2>
    <code-block [code]="recursiveCloseUsage" />
    <div class="documentation-playground">
      <r-tree [closeRecursively]="true" [maxWidth]="'240px'">
        <r-tree-node>
          Parent Node
          <r-tree>
            <r-tree-node>
              Child Node 1
              <r-tree>
                <r-tree-node>Grandchild Node 1</r-tree-node>
                <r-tree-node>Grandchild Node 2</r-tree-node>
              </r-tree>
            </r-tree-node>
            <r-tree-node>Child Node 2</r-tree-node>
          </r-tree>
        </r-tree-node>
      </r-tree>
    </div>

    <h2>With Drag-and-Drop</h2>
    <code-block [code]="dragDropUsage" />
    <div class="documentation-playground">
      <r-tree
        [draggable]="true"
        [maxWidth]="'240px'"
        (dropEmitter)="onDrop($event)">
        @for (node of nodes; track node) {
          <r-tree-node>
            {{ node.name }}
            @if (node.children) {
              <r-tree>
                @for (child of node.children; track child) {
                  <r-tree-node>
                    {{ child.name }}
                  </r-tree-node>
                }
              </r-tree>
            }
          </r-tree-node>
        }
      </r-tree>
    </div>

    <h2>Complex Example</h2>
    <code-block [code]="complexUsage" />
    <div class="documentation-playground">
      <r-tree
        [maxWidth]="'320px'"
        [draggable]="true"
        (dropEmitter)="onDrop($event)"
        id="complexTree">
        @for (node of complexNodes; track node) {
          <r-tree-node>
            <i r-icon [size]="13" icon="Folder"></i> {{ node.name }}
            @if (node.badge) {
              <span r-badge variant="outlined" size="small">{{
                node.badge
              }}</span>
            }
            @if (node.children) {
              <r-tree
                [draggable]="true"
                (dropEmitter)="onChildDrop($event)"
                id="childTree-{{ node.name }}">
                @for (child of node.children; track child) {
                  <r-tree-node>
                    <i r-icon [size]="13" icon="File"></i> {{ child.name }}
                    @if (child.badge) {
                      <span r-badge variant="outlined" size="small">{{
                        child.badge
                      }}</span>
                    }
                    @if (child.children) {
                      <r-tree
                        [draggable]="true"
                        (dropEmitter)="onChildDrop($event)"
                        id="childTree-{{ child.name }}">
                        @for (grandchild of child.children; track grandchild) {
                          <r-tree-node>
                            <i r-icon [size]="13" icon="File"></i>
                            {{ grandchild.name }}
                            @if (grandchild.badge) {
                              <span r-badge variant="outlined" size="small">{{
                                grandchild.badge
                              }}</span>
                            }
                          </r-tree-node>
                        }
                      </r-tree>
                    }
                  </r-tree-node>
                }
              </r-tree>
            }
          </r-tree-node>
        }
      </r-tree>
    </div>

    <h2>Two Trees Example</h2>
    <code-block [code]="twoTreesUsage" />
    <div class="documentation-playground">
      <div
        style="display: flex; flex-direction: column; gap: 2rem; width: 100%; align-items: center;">
        <span>Tree 1</span>
        <r-tree
          [maxWidth]="'240px'"
          [draggable]="true"
          id="tree1"
          [connectedTo]="['tree2']"
          (dropEmitter)="onTwoTreesDrop($event)">
          @for (node of tree1Nodes; track node) {
            <r-tree-node>
              {{ node.name }}
            </r-tree-node>
          }
        </r-tree>
        <span>Tree 2</span>
        <r-tree
          [maxWidth]="'240px'"
          [draggable]="true"
          id="tree2"
          [connectedTo]="['tree1']"
          (dropEmitter)="onTwoTreesDrop($event)">
          @for (node of tree2Nodes; track node) {
            <r-tree-node>
              {{ node.name }}
            </r-tree-node>
          }
        </r-tree>
      </div>
    </div>

    <h2>Events</h2>
    <span
      >This section lists the events emitted by the
      <strong>Tree</strong> component.</span
    >
    <div class="table-wrapper">
      <table>
        <tr>
          <th>Event</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        <tr>
          <td><strong>dropEmitter</strong></td>
          <td><code>CdkDragDrop&lt;string[]&gt;</code></td>
          <td>
            Emitted when a drag-and-drop operation is completed within the tree.
          </td>
        </tr>
      </table>
    </div>

    <h2>CdkDragDrop Type</h2>
    <span
      >This section describes the fields of the
      <strong>CdkDragDrop</strong> type.</span
    >
    <div class="table-wrapper">
      <table>
        <tr>
          <th>Field</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        <tr>
          <td><strong>previousIndex</strong></td>
          <td><code>number</code></td>
          <td>The index of the item before the drop operation.</td>
        </tr>
        <tr>
          <td><strong>currentIndex</strong></td>
          <td><code>number</code></td>
          <td>The index of the item after the drop operation.</td>
        </tr>
        <tr>
          <td><strong>item</strong></td>
          <td><code>T</code></td>
          <td>The item being dragged.</td>
        </tr>
        <tr>
          <td><strong>container</strong></td>
          <td><code>CdkDropList</code></td>
          <td>The container where the item was dropped.</td>
        </tr>
        <tr>
          <td><strong>previousContainer</strong></td>
          <td><code>CdkDropList</code></td>
          <td>The container from which the item was dragged.</td>
        </tr>
      </table>
    </div>`,
  standalone: true,
  imports: [Tree, TreeNode, CodeBlockComponent, Icon, Badge],
})
export default class TreeDocumentationComponent {
  angularImport = `import { Tree, TreeNode } from 'rem-ui/angular'`;

  basicUsage = `<r-tree [maxWidth]="'240px'">
  <r-tree-node>Node 1</r-tree-node>
  <r-tree-node>Node 2</r-tree-node>
</r-tree>`;

  nestedUsage = `<r-tree [maxWidth]="'240px'">
  <r-tree-node>
    Parent Node
    <r-tree>
      <r-tree-node>Child Node 1</r-tree-node>
      <r-tree-node>Child Node 2</r-tree-node>
    </r-tree>
  </r-tree-node>
</r-tree>`;

  dragDropUsage = `<r-tree [draggable]="true" [maxWidth]="'240px'" (dropEmitter)="onDrop($event)">
  <r-tree-node>
    Node 1
    <r-tree>
      <r-tree-node>Child Node 1</r-tree-node>
      <r-tree-node>Child Node 2</r-tree-node>
    </r-tree>
  </r-tree-node>
  <r-tree-node>Node 2</r-tree-node>
</r-tree>`;

  recursiveCloseUsage = `<r-tree [closeRecursively]="true" [maxWidth]="'240px'">
  <r-tree-node>
    Parent Node
    <r-tree>
      <r-tree-node>
        Child Node 1
        <r-tree>
          <r-tree-node>Grandchild Node 1</r-tree-node>
          <r-tree-node>Grandchild Node 2</r-tree-node>
        </r-tree>
      </r-tree-node>
      <r-tree-node>Child Node 2</r-tree-node>
    </r-tree>
  </r-tree-node>
</r-tree>`;

  complexUsage = `<r-tree [draggable]="true" (dropEmitter)="onDrop($event)" id="complexTree" [maxWidth]="'320px'">
  <r-tree-node>
    <i r-icon [size]="13" icon="Folder"></i> Parent Node
    <span r-badge variant="outlined" size="small">New</span>
    <r-tree [draggable]="true" (dropEmitter)="onChildDrop($event)" id="childTree-Parent Node">
      <r-tree-node>
        <i r-icon [size]="13" icon="File"></i> Child Node 1
        <span r-badge variant="outlined" size="small">Updated</span>
      </r-tree-node>
      <r-tree-node>
        <i r-icon [size]="13" icon="File"></i> Child Node 2
        <r-tree [draggable]="true" (dropEmitter)="onChildDrop($event)" id="childTree-Child Node 2">
          <r-tree-node>
            <i r-icon [size]="13" icon="File"></i> Grandchild Node 1
          </r-tree-node>
          <r-tree-node>
            <i r-icon [size]="13" icon="File"></i> Grandchild Node 2
            <span r-badge variant="outlined" size="small">Important</span>
          </r-tree-node>
        </r-tree>
      </r-tree-node>
    </r-tree>
  </r-tree-node>
  <r-tree-node>
    <i r-icon [size]="13" icon="Folder"></i> Another Parent Node
    <span r-badge variant="outlined" size="small">Beta</span>
  </r-tree-node>
</r-tree>`;

  twoTreesUsage = `<div style="display: flex; flex-direction: column; gap: 2rem; width: 100%; align-items: center;">
  <span>Tree 1</span>
  <r-tree [draggable]="true" id="tree1" [connectedTo]="['tree2']" [maxWidth]="'240px'" (dropEmitter)="onTwoTreesDrop($event)">
    <r-tree-node>Item 1</r-tree-node>
    <r-tree-node>Item 2</r-tree-node>
  </r-tree>
  <span>Tree 2</span>
  <r-tree [draggable]="true" id="tree2" [connectedTo]="['tree1']" [maxWidth]="'240px'" (dropEmitter)="onTwoTreesDrop($event)">
    <r-tree-node>Item A</r-tree-node>
    <r-tree-node>Item B</r-tree-node>
  </r-tree>
</div>`;

  nodes = [
    {
      name: 'Node 1',
      children: [{ name: 'Child Node 1' }, { name: 'Child Node 2' }],
    },
    { name: 'Node 2' },
  ];

  complexNodes = [
    {
      name: 'Parent Node',
      badge: 'New',
      children: [
        { name: 'Child Node 1', badge: 'Updated' },
        {
          name: 'Child Node 2',
          children: [
            { name: 'Grandchild Node 1' },
            { name: 'Grandchild Node 2', badge: 'Important' },
          ],
        },
      ],
    },
    { name: 'Another Parent Node', badge: 'Beta' },
  ];

  tree1Nodes = [{ name: 'Item 1' }, { name: 'Item 2' }];

  tree2Nodes = [{ name: 'Item A' }, { name: 'Item B' }];

  onDrop(event: CdkDragDrop<any[]>) {
    if (event.container.id === 'complexTree') {
      moveItemInArray(
        this.complexNodes,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      moveItemInArray(this.nodes, event.previousIndex, event.currentIndex);
    }
  }

  onChildDrop(event: CdkDragDrop<any[]>) {
    const findNodeById = (nodes: any[], id: string): any => {
      for (const node of nodes) {
        if (`childTree-${node.name}` === id) {
          return node;
        }
        if (node.children) {
          const found = findNodeById(node.children, id);
          if (found) {
            return found;
          }
        }
      }
      return null;
    };

    const parentNode = findNodeById(this.complexNodes, event.container.id);
    if (parentNode && parentNode.children) {
      moveItemInArray(
        parentNode.children,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onTwoTreesDrop(event: CdkDragDrop<any[]>) {
    const previousContainer =
      event.previousContainer.id === 'tree1'
        ? this.tree1Nodes
        : this.tree2Nodes;
    const currentContainer =
      event.container.id === 'tree1' ? this.tree1Nodes : this.tree2Nodes;

    const [movedItem] = previousContainer.splice(event.previousIndex, 1);
    currentContainer.splice(event.currentIndex, 0, movedItem);
  }
}
