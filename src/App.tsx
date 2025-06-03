import React, { useState } from "react";
import Globe3D from "./components/Globe3D";
import LoginForm from "./components/LoginForm";
import SurvivalAdvice from "./components/SurvivalAdvice";
import { Alert } from "./types/Alert";

const App: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  const [activeAlert, setActiveAlert] = useState<Alert | null>(null);
  const [activeType, setActiveType] = useState<string>("");

  return (
    <div>
      {!user ? (
        <LoginForm onLogin={setUser} />
      ) : (
        <>
          <h2>Bienvenue, {user} !</h2>
          <Globe3D
            onSelectAlert={(alert) => {
              setActiveAlert(alert);
              setActiveType(alert.type);
            }}
          />
          {activeAlert && (
            <SurvivalAdvice type={activeType} onClose={() => setActiveAlert(null)} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
