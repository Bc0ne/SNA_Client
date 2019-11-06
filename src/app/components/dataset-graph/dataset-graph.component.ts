import { Component, Input, ChangeDetectorRef, HostListener, ChangeDetectionStrategy, OnInit, AfterViewInit } from '@angular/core';
import { D3Service } from './d3.service';
import { ForceDirectedGraph } from './models/force-directed-graph.model';

@Component({
  selector: 'app-dataset-graph',
  templateUrl: './dataset-graph.component.html',
  styleUrls: ['./dataset-graph.component.css'],
})
export class DatasetGraphComponent implements OnInit {

  @Input('nodes') nodes;
  @Input('links') links;
  graph: ForceDirectedGraph;
  public _options: { width, height } = { width: 500, height: 300 };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.graph.initSimulation(this.options);
  }


  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    /** Receiving an initialized simulated graph from our custom d3 service */
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);

    /** Binding change detection check on each tick
     * This along with an onPush change detection strategy should enforce checking only when relevant!
     * This improves scripting computation duration in a couple of tests I've made, consistently.
     * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
     */
    this.graph.ticker.subscribe((d) => {
      this.ref.markForCheck();
    });
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }

  get options() {
    return this._options = {
      width: 960,
      height: 600
    };
  }
}