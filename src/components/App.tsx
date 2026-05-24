import {
  LocationProvider,
  ErrorBoundary,
  Router,
  Route,
  lazy,
} from "preact-iso";
import { Layout } from "@/components/Layout";

const Home = lazy(() => import("@/pages/Home"));
const Symbols = lazy(() => import("@/pages/Symbols"));
const Uuids = lazy(() => import("@/pages/Uuids"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export function App() {
  return (
    <LocationProvider>
      <Layout>
        <ErrorBoundary>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/symbols" component={Symbols} />
            <Route path="/uuids" component={Uuids} />
            <Route default component={NotFound} />
          </Router>
        </ErrorBoundary>
      </Layout>
    </LocationProvider>
  );
}
