import { useAuth } from "../Storage/ProtectContext";

export default function ProtectedRoute({ children }) {
  const { UserType } = useAuth();

  if (UserType === "Checking...") {
    return <div>Checking access...</div>;
  }

  return children;
}
