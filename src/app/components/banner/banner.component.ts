import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @ViewChild('modalTemplate')
  modalTemplate!: TemplateRef<any>;
  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }
  openModal() {
    this.modalService.open(this.modalTemplate)
  }
  closeModal(): void {
    this.modalService.dismissAll()
  }
}
