import React, { useEffect } from "react";
import PostContainer from "./components/PostContainer";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActoinCreators";

function App() {
  const dispatch = useAppDispatch();
  const { error, isLoading, users } = useAppSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      {/* {error && <div>{error}</div>}
      {isLoading && <h1>is loading...</h1>}
      {JSON.stringify(users, null, 2)} */}
      <PostContainer />
    </div>
  );
}

export default App;
