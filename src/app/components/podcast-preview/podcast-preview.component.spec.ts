import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastPreviewComponent } from './podcast-preview.component';

describe('PodcastPreviewComponent', () => {
  let component: PodcastPreviewComponent;
  let fixture: ComponentFixture<PodcastPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodcastPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
