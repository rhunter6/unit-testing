import { shallow } from "enzyme";
import ClickCounter from "./ClickCounter";


describe("ClickCounter testing", () => {
  it("should render", () => {
    const shallowWrapper = shallow(<ClickCounter />);
    expect(shallowWrapper).toMatchSnapshot();
  });

  it("should click the counter", () => {
    const shallowWrapper = shallow(<ClickCounter />);
    expect(shallowWrapper.state().counter).toBe(0);
    shallowWrapper.find("button").simulate('click');
    expect(shallowWrapper.state().counter).toBe(1);
    shallowWrapper.find("button").simulate('click');
    shallowWrapper.find("button").simulate('click');
    shallowWrapper.find("button").simulate('click');
    expect(shallowWrapper.state().counter).toBe(4);

    
    shallowWrapper.setState({counter: 25});
    expect(shallowWrapper.state().counter).toBe(25);
    expect(shallowWrapper).toMatchSnapshot();
  })
});
