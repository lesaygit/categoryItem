import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListComponent } from './category.list.component';

describe('CategoryListComponent', () => {
  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryListComponent]
    });
    fixture = TestBed.createComponent(CategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render text', () => {
    //const fixture = TestBed.createComponent(CategoryListComponent);
    //fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('category list works!');
  });

});
