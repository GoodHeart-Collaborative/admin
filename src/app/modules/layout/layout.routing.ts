import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { USER, DASHBOARD , CONTENT_MANAGEMENT ,
      CATEGORY, DAILY_INSPIRATION, DAILY_UNICORN,
      DAILY_ADVICE, MEMBER_OF_THE_DAY, ARTICLES, EXPERT, EVENTS,
       NOTIFICATIONS, FORUM, FEED, REPORTS_AND_ANALYTICS, CALENDER, FAQs, EVENT_CATEGORY} from '../../constant/routes';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: DASHBOARD.path, pathMatch: 'full' },
      {
        path: DASHBOARD.path,
        loadChildren: () =>
          import('./../features/dashboard/dashboard.module').then(
            (m) => m.DashboardModule),
      },
      {
        path: USER.path,
        loadChildren: () =>
          import('./../features/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: CONTENT_MANAGEMENT.path,
        loadChildren: () =>
          import('../features/content-management/content-management.module').then((m) => m.ContentManagementModule),
      },
      {
        path: CATEGORY.path,
        loadChildren: () =>
          import('../features/category-management/category-management.module').then((m) => m.CategoryManagementModule
          ),
      },
      {
        path: DAILY_INSPIRATION.path,
        loadChildren: () =>
          import('../features/daily-inspiration/daily-inspiration.module').then((m) => m.DailyInspirationModule
          ),
      },
      {
        path: DAILY_UNICORN.path,
        loadChildren: () =>
          import('../features/daily-unicorn-humour/daily-unicorn-humour.module')
          .then((m) => m.DailyUnicornHumourModule
          ),
      },
      {
        path: DAILY_ADVICE.path,
        loadChildren: () =>
          import('../features/daily-advice-management/daily-advice-management.module')
          .then((m) => m.DailyAdviceManagementModule
          ),
      },
      {
        path: MEMBER_OF_THE_DAY.path,
        loadChildren: () =>
          import('../features/member-of-the-day/member-of-the-day.module')
          .then((m) => m.MemberOfTheDayModule
          ),
      },
      {
        path: ARTICLES.path,
        loadChildren: () =>
          import('../features/article-management/article-management.module')
          .then((m) => m.ArticleManagementModule
          ),
      },
      {
        path: EXPERT.path,
        loadChildren: () =>
          import('../features/expert/expert.module')
          .then((m) => m.ExpertModule
          ),
      },
      {
        path: FAQs.path,
        loadChildren: () =>
          import('../features/faqs/faqs.module')
          .then((m) => m.FaqsModule
          ),
      },
      {
        path: EVENTS.path,
        loadChildren: () =>
          import('../features/event/event.module')
          .then((m) => m.EventModule
          ),
      },
      {
        path: NOTIFICATIONS.path,
        loadChildren: () =>
          import('../features/notifications/notifications.module')
          .then((m) => m.NotificationsModule
          ),
      },
      {
        path: FORUM.path,
        loadChildren: () =>
          import('../features/forum/forum.module')
          .then((m) => m.ForumModule
          ),
      },
      {
        path: FEED.path,
        loadChildren: () =>
          import('../features/feed-management/feed-management.module')
          .then((m) => m.FeedManagementModule
          ),
      },
      {
        path: REPORTS_AND_ANALYTICS.path,
        loadChildren: () =>
          import('../features/reports-and-analytics/reports-and-analytics.module')
          .then((m) => m.ReportsAndAnalyticsModule
          ),
      },
      {
        path: CALENDER.path,
        loadChildren: () =>
          import('../features/calendar/calendar.module')
          .then((m) => m.CalendarModule
          ),
      },
      {
        path: EVENT_CATEGORY.path,
        loadChildren: () =>
          import('../features/event-category/event-category.module')
          .then((m) => m.EventCategoryModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class LayoutRoutingModule {}
