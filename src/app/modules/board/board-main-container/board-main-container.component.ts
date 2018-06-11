import { Component, OnInit,ElementRef } from '@angular/core';
import { BoardActions } from "../shared/board.actions";
import { List, Map, fromJS } from 'immutable';
import { NgRedux, select } from '@angular-redux/store';
import { Subject } from 'rxjs/Subject';

declare var vis: any;

@Component({
  selector: 'board-main-container',
  templateUrl: './board-main-container.component.pug',
  styleUrls: ['./board-main-container.component.scss']
})
export class BoardMainContainerComponent implements OnInit {
  @select(['board', 'flowchart']) flowchart$: any;
  @select(['board', 'isLoading']) isLoading$: any;

  name:string;

  flowchart;
  isLoading=false;
  
  constructor(private boardActions:BoardActions,private redux:NgRedux<any>,private element: ElementRef) {
    this.name = 'Angular2'
   }

  ngOnInit() {
    this.flowchart$.subscribe((res:any) => {
      console.log(res.size);
      this.flowchart=res;
    });
  }

  getProjects(){
    this.redux.dispatch(this.boardActions.getProjects());
  }
  
  allowDrop(ev) {
    
    ev.preventDefault();
  }

  drag(ev) {
    console.log("dragging");
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  search(event){
    if(event.keyCode==13){
      this.redux.dispatch(this.boardActions.getFlowchart(this.initilizeFlowchart.bind(this)));
    }
  }

  initilizeFlowchart(){
    console.log(this.flowchart.size);
   
    let container = document.getElementById('workflow-area');

    // provide the data in the vis format
    let data = {
        nodes: new vis.DataSet(this.flowchart.get('nodes').toJS()),
        edges: new vis.DataSet(this.flowchart.get('edges').toJS())
    };
    var options = {
      physics:{
        enabled:false
      },
      edges:{
        color:{
          color:"#D6Df22",
          hover:"#D6Df22",
          highlight:"#D6Df22",
        }
      },
      nodes:{
        shape:"box",
        color:{
          background:"#000000",
          border:"#D6Df22",
          highlight:"#D6Df22"
        },
        font:{
          color:"#ffffff",
          size:12,
          face:"Roboto"
        },
      }
    };

    console.log(data);

    // initialize your network!
    var network = new vis.Network(container, data, options);
    
  }

}