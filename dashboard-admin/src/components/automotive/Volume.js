import ReactSlider from "react-slider";
import styled from "styled-components";

const Volume = () => {
  const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 8px;
  `;

  const StyledThumb = styled.div`
    height: 18px;
    width: 18px;
    bottom: -5px;
    text-align: center;
    background-color: #ffff;
    color: #fff;
    border-radius: 50%;
    cursor: grab;
  `;

  const Thumb = (props, state) => (
    <StyledThumb {...props}>{state.valueNow}</StyledThumb>
  );

  const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background-image: ${(props) =>
      props.index === 2 ? "linear-gradient(310deg, rgb(253, 253, 253), rgb(255, 255, 255))" : props.index === 1 ? "linear-gradient(310deg, rgb(253, 253, 253), rgb(255, 255, 255))" : "linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253));"};
    border-radius: 999px;
  `;

  const Track = (props, state) => (
    <StyledTrack {...props} index={state.index} />
  );

  return (
    <StyledSlider
      defaultValue={40}
      step={1}
      min={0}
      max={99}
      renderTrack={Track}
      renderThumb={Thumb}
    />
  );
}

export default Volume;