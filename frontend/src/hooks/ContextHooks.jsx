// React Context (Hooks)
import { useContext } from "react";

// 1. Authentication Context
import AuthContext from "@/Storage/Authentication";

export const useAuth = () => useContext(AuthContext);

// 2. Basic Preferences Context
import PrefContext from "@/Storage/Preferences";

export const usePreference = () => useContext(PrefContext);

// 3. Calendar Context
import CalContext from "@/Storage/Calendar";

export const useCalendar = () => useContext(CalContext);
