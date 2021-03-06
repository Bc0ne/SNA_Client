import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { Node } from '../models/node.model';
import { ForceDirectedGraph } from '../models/force-directed-graph.model'
import { D3Service } from '../d3.service';

@Directive({
    selector: '[draggableNode]'
})
export class DraggableDirective implements OnInit {
    @Input('draggableNode') draggableNode: Node;
    @Input('draggableInGraph') draggableInGraph: ForceDirectedGraph;

    constructor(private d3Service: D3Service, private _element: ElementRef) { }

    ngOnInit() {
        this.d3Service.applyDraggableBehaviour(this._element.nativeElement, this.draggableNode, this.draggableInGraph);
    }
}
