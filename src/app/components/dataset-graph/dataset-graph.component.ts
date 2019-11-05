import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EChartOption } from 'echarts';
import { parse } from 'echarts/extension/dataTool/gexf';
import { HomeService } from 'src/app/containers/home/home.service';

@Component({
  selector: 'app-dataset-graph',
  templateUrl: './dataset-graph.component.html',
  styleUrls: ['./dataset-graph.component.css']
})
export class DatasetGraphComponent implements OnInit {

  users: any[] = [
    {
      "id": 318798,
      "personId1": 1,
      "personId2": 2,
      "creationTime": "2019-10-31T18:04:02.201939"
    },
    {
      "id": 318799,
      "personId1": 1,
      "personId2": 3,
      "creationTime": "2019-10-31T18:04:03.9147506"
    },
    {
      "id": 318800,
      "personId1": 1,
      "personId2": 5,
      "creationTime": "2019-10-31T18:04:05.5471703"
    },
    {
      "id": 318801,
      "personId1": 2,
      "personId2": 3,
      "creationTime": "2019-10-31T18:04:06.8354913"
    },
    {
      "id": 318802,
      "personId1": 4,
      "personId2": 2,
      "creationTime": "2019-10-31T18:04:08.0351413"
    },
    {
      "id": 318803,
      "personId1": 3,
      "personId2": 2,
      "creationTime": "2019-10-31T18:04:09.1943777"
    },
    {
      "id": 318804,
      "personId1": 4,
      "personId2": 5,
      "creationTime": "2019-10-31T18:04:10.5661562"
    },
    {
      "id": 671755,
      "personId1": 8,
      "personId2": 1,
      "creationTime": "2019-11-02T18:44:48.9833333"
    }
  ]

  options: Observable<EChartOption>;
  constructor(private homeService: HomeService) { }


  ngOnInit() {
    // this.options = this.homeService.getFriendshipsByDatasetId(3).subscribe((res) =>
    //   res.
    //     pipe(
    //       map(xml => {
    //         const graph = parse(xml);
    //         const categories = [];
    //         for (let i = 0; i < 9; i++) {
    //           categories[i] = {
    //             name: 'category' + i
    //           };
    //         }
    //         graph.nodes.forEach(function (node) {
    //           node.itemStyle = null;
    //           node.symbolSize = 10;
    //           node.value = node.symbolSize;
    //           node.category = node.attributes.modularity_class;
    //           // Use random x, y
    //           node.x = node.y = null;
    //           node.draggable = false;
    //         });
    //         return {
    //           title: {
    //             text: 'Les Miserables',
    //             subtext: 'Default layout',
    //             top: 'bottom',
    //             left: 'right'
    //           },
    //           tooltip: {},
    //           legend: [{
    //             data: categories.map(function (a) {
    //               return a.name;
    //             })
    //           }] as EChartOption.Legend,
    //           animation: false,
    //           series: [
    //             {
    //               name: 'Les Miserables',
    //               type: 'graph',
    //               layout: 'force',
    //               data: graph.nodes,
    //               links: graph.links,
    //               categories: categories,
    //               roam: true,
    //               label: {
    //                 normal: {
    //                   position: 'right'
    //                 }
    //               },
    //               force: {
    //                 repulsion: 100
    //               }
    //             }
    //           ]
    //         };
    //       })
    //     )
    //);
    // this.options = this.homeService.getFriendshipsByDatasetId(3).pipe(
    //   map(fs => {
    //     const graph = parse(fs);

    //   })
    // )
  }
}
