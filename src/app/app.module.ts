import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollEventModule } from 'ngx-scroll-event';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AutocompltePaginationComponent } from './autocomplte-pagination/autocomplte-pagination.component';
import{ FilterPipe} from './app.filter';

const routes : Routes = ([
{ path : 'login', component : LoginComponent},
{path : 'autocomplte-pagination', component : AutocompltePaginationComponent}
])


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AutocompltePaginationComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    InfiniteScrollModule,
    ScrollEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
