import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const FacultyPage = lazy(() => import('./pages/FacultyPage'));
const FacultyDetailPage = lazy(() => import('./pages/FacultyDetailPage'));
const StudentsPage = lazy(() => import('./pages/StudentsPage.tsx'));
const StudentDetailPage = lazy(() => import('./pages/StudentDetailPage.tsx'));
const ResearchPage = lazy(() => import('./pages/ResearchPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'));
const ProgramDetailPage = lazy(() => import('./pages/ProgramDetailPage'));
const NewsEventsPage = lazy(() => import('./pages/NewsEventsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const LabDetailPage = lazy(() => import('./pages/LabDetailPage'));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-academic-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/people" element={<Navigate to="/people/faculty" replace />} />
              <Route path="/people/faculty" element={<FacultyPage />} />
              <Route path="/people/faculty/:slug" element={<FacultyDetailPage />} />
              <Route path="/people/students" element={<StudentsPage />} />
              <Route path="/people/student/:slug" element={<StudentDetailPage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/labs/:slug" element={<LabDetailPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/programs/:slug" element={<ProgramDetailPage />} />
              <Route path="/news" element={<NewsEventsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
