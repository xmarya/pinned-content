import Description from "./Components/Description";
import Label from "./Components/Label";
import MovingList from "./Components/MovingList";
import { stickyData } from "./data/stickyData";
import { ActiveIndexProvider } from "./hooks/useActiveIndex";

export default function App() {
  return (
    <>
      <div className="half-vp" />
      <ActiveIndexProvider>
        <div className="section-wrapper">
          <div className="sticky-side">
            <div className="gutter-1">
              <div className="red-bg" />
            </div>

            <div className="grid-wrapper">
              <div className="grid">
                <MovingList>
                  {stickyData.map((data, index) => (
                    <Label key={index} index={index}>
                      {data.title}
                    </Label>
                  ))}
                </MovingList>
              </div>
            </div>

            <div className="gutter-2">
              <div className="transparent-bg" />
            </div>
          </div>

          <div className="grid-wrapper">
            <div className="grid">
              <ul className="non-sticky-side">
                {stickyData.map((data, index) => (
                  <Description index={index} key={index}>
                    <p>{data.description}</p>
                  </Description>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ActiveIndexProvider>
      <div className="full-vp" />
    </>
  );
}
