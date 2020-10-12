import React from "react";
import { ScaleLoader } from 'react-spinners'

export default function Loading() {
return (
        <div className="d-flex align-items-center justify-content-center" style={{verticalAlign: "middle"}}>
            <ScaleLoader
          size={30}
          color={"gray"}
          loading
        />
    </div>
  );
}