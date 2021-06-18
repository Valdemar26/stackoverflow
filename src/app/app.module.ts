import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchComponent } from './components/header/search/search.component';
import { UserInfoComponent } from './components/header/user-info/user-info.component';
import { HomeComponent } from './components/left-sidebar/home/home.component';
import { PublicComponent } from './components/left-sidebar/public/public.component';
import { TeamsComponent } from './components/left-sidebar/teams/teams.component';
import { BlogComponent } from './components/right-sidebar/blog/blog.component';
import { RelatedQuestionsComponent } from './components/right-sidebar/related-questions/related-questions.component';
import { HotQuestionsComponent } from './components/right-sidebar/hot-questions/hot-questions.component';
import { FooterComponent } from './components/footer/footer.component';
import { AskedQuestionComponent } from './components/main/asked-question/asked-question.component';
import { AnswersListComponent } from './components/main/answers-list/answers-list.component';
import { YourAnswerComponent } from './components/main/your-answer/your-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SearchComponent,
    UserInfoComponent,
    HomeComponent,
    PublicComponent,
    TeamsComponent,
    BlogComponent,
    RelatedQuestionsComponent,
    HotQuestionsComponent,
    FooterComponent,
    AskedQuestionComponent,
    AnswersListComponent,
    YourAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
