import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtformspagesComponent } from './artformspages.component';

describe('ArtformspagesComponent', () => {
  let component: ArtformspagesComponent;
  let fixture: ComponentFixture<ArtformspagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtformspagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtformspagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
