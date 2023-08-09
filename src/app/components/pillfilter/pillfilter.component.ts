import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pillfilter',
  templateUrl: './pillfilter.component.html',
  styleUrls: ['./pillfilter.component.scss']
})
export class PillfilterComponent implements OnInit {
  public selectedPills: number[] = [];
  public unselectedPills: number[] = [];
  public filters: number[] = []
  @Output() public filterSelected = new EventEmitter<number[]>()

  @Input() set pills(value: number[]) {
    // this.selectedPills  = value
    this.unselectedPills = value

  }

  constructor() { }

  ngOnInit(): void {
  }

  public addFilter(pillDetails: { hasBeenSelected: boolean, topic: number }): void {
    if (!pillDetails.hasBeenSelected) {
      const selectedIndex = this.unselectedPills.indexOf(pillDetails.topic)
      const [selectedPill] = this.unselectedPills.splice(selectedIndex, 1)
      console.log(selectedPill)
      this.selectedPills.push(selectedPill)
      this.filters.push(pillDetails.topic)

      this.filterSelected.emit(this.filters);
    }
  }

  public removeFilter(pillDetails: { hasBeenSelected: boolean, topic: number }): void {
    const selectedIndex = this.selectedPills.indexOf(pillDetails.topic);
    const [selectedPill] = this.selectedPills.splice(selectedIndex, 1)
    this.unselectedPills.push(selectedPill)

    let filterIndex = this.filters.indexOf(pillDetails.topic)

    //splice to remove elements from the array
    const [selectedFilter] = this.filters.splice(filterIndex, 1)

    this.filterSelected.emit(this.filters);
  }

}
