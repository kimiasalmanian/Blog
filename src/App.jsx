import Homepage from "./component/Home/Homepage";
import Layout from "./component/Layout/Layout";

function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        backgroundAttachment: "fixed", 
      }}
    >
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}

export default App;