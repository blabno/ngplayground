import { TestBed, async } from '@angular/core/testing';
import * as moment from 'moment';
import { AppComponent } from './app.component';
import {MOMENT} from './moment';

describe('AppComponent', () => {
  let momentStub;
  beforeEach(async(() => {
    momentStub = jasmine.createSpy('moment');
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: MOMENT, useValue: momentStub }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ngplayground');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ngplayground!');
  }));
  it('should render title in a h2 tag', async(() => {
    const now = moment.utc(1532462308348);
    momentStub.and.returnValue(now);
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent) .toContain('Tue Jul 24 2018 19:58:28 GMT+0000');
  }));
});
