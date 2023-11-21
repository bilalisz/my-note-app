import React, { Suspense, lazy } from "react";
const AddNoteCnt = lazy(() => import("../components/AddNote"));

const AddNote = () => {
  return (
    <div className="flex justify-center mt-1">
      <Suspense fallback="loading...">
        <AddNoteCnt />
      </Suspense>
    </div>
  );
};

export default AddNote;
