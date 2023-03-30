import { BrowserView, MobileView } from 'react-device-detect';
import { Unity, useUnityContext } from 'react-unity-webgl'

function App() {

  const { unityProvider, isLoaded } = useUnityContext({
    loaderUrl: "unity/unity.loader.js",
    dataUrl: "unity/unity.data.unityweb",
    frameworkUrl: "unity/unity.framework.js.unityweb",
    codeUrl: "unity/unity.wasm.unityweb"
  });

  return (
    <>
      <BrowserView>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: "100%",
            height: '100%'
          }}>
          {!isLoaded && <div>Loading...</div>}
          <Unity
            style={{
              visibility: isLoaded ? "visible" : "hidden",
              width: '100%',
              height: '100%',
            }}
            unityProvider={unityProvider} />
        </div>
      </BrowserView>
      <MobileView>
        For a better experience, please use the browser
      </MobileView>
    </>
  )
}

export default App
