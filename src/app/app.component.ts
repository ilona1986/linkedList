import {Component, OnInit} from '@angular/core';
import {LinkedList} from "./linkedList";
import {DoubleList} from "./doubleLinkedList";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'linkedList';

  ngOnInit(): void {
    // testLinkedList();
    // DoublList();
  }


}

// function testLinkedList() {
//   let list = new LinkedList<number>();
//
//   console.log('Before');
//   list.print();
//   console.log('Add 5'); list.addToTheEnd(5);
//   console.log('Add 10'); list.addToTheEnd(10);
//   console.log('Add 15'); list.addToTheEnd(15);
//   console.log('After');
//   list.print();
//
//   console.log('----------------')
//
//   console.log("Remove from position 0", list.removeFromPosition(0))
//   console.log("Remove from position 1", list.removeFromPosition(1))
//   console.log("Remove from position 10",list.removeFromPosition(10))
//   list.print();
//
//   console.log('----------------')
//
//   console.log('Insert 50 to position 0');
//   list.insertInPosition(0, 50)
//   console.log('Insert 100 to position 0');
//   list.insertInPosition(0, 100)
//   console.log('Insert 1 to position 4');
//   list.insertInPosition(1, 1);
//   list.print()
//
//   console.log('----------------')
//   console.log("Removed by Value", list.removeElementByValue(100));
//   list.print()
//
//   console.log('----------------')
//   console.log("Found by Position", list.getNodeByPosition(1));
//   console.log('Length', list.getLength());
//   console.log('Empty?', list.isEmpty());
// }

// function DoublList() {
//   let d = new DoubleList<number>();
//   console.log('Двусвязный список');
//   console.log(d);
//   d.toArray();
//   d.push(2)
//   d.push(3)
//   d.push(4)
//   console.log('после добавления трех эл-ов в массив',d);
//   console.log('----------------')
//   d.getItem(3);
//   console.log('удаление с позиции 3', d);
// }
