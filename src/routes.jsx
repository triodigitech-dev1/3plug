import { Navigate, createBrowserRouter } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import OverviewPage from './pages/OverviewPage'
import PlugHomePage from './pages/PlugHomePage'
import PlugIndustryPage from './pages/PlugIndustryPage'
import PlugModulePage from './pages/PlugModulePage'
import UIFoundationPage from './pages/UIFoundationPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <OverviewPage /> },
      { path: 'pos', element: <OverviewPage /> },
      {
        path: 'operations',
        children: [
          { index: true, element: <PlugHomePage plugKey="operations" basePath="operations" /> },
          { path: 'modules/:moduleId', element: <PlugModulePage plugKey="operations" basePath="operations" /> },
          { path: 'industries/:industryId', element: <PlugIndustryPage plugKey="operations" basePath="operations" /> },
        ],
      },
      {
        path: 'management',
        children: [
          { index: true, element: <PlugHomePage plugKey="management" basePath="management" /> },
          { path: 'modules/:moduleId', element: <PlugModulePage plugKey="management" basePath="management" /> },
          { path: 'industries/:industryId', element: <PlugIndustryPage plugKey="management" basePath="management" /> },
        ],
      },
      {
        path: 'administration',
        children: [
          { index: true, element: <PlugHomePage plugKey="administration" basePath="administration" /> },
          { path: 'modules/:moduleId', element: <PlugModulePage plugKey="administration" basePath="administration" /> },
          { path: 'industries/:industryId', element: <PlugIndustryPage plugKey="administration" basePath="administration" /> },
        ],
      },
      { path: 'ui-foundation', element: <UIFoundationPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])

export default router
