import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Player } from "./components/Player";

export function App() {
    return (
        <div className="app">
            <div className="app-container">
                <Sidebar />
                <Outlet />
            </div>
            <Player />
        </div>
    )
}