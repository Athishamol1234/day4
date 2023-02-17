import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiglepagesComponent } from './siglepages.component';

describe('SiglepagesComponent', () => {
  let component: SiglepagesComponent;
  let fixture: ComponentFixture<SiglepagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiglepagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiglepagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
