// import { Component, PureComponent } from "react";
import { Component } from "react";

interface ClickMeProps {
  level?: number,
}

interface ClickMeState {
  count: number,
}

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>03 클래스 컴포넌트 - 컴포넌트의 라이프 사이클</h1>
        <ClickMe level={5} />
      </div>
    )
  }
}

class ClickMe extends Component<ClickMeProps, ClickMeState> {
  state = { count: 0 };

  constructor(props: ClickMeProps) {
    console.log("1-1 constructor 호출됨")
    super(props)
    this.state = { count: props.level || 1 };
  }

  // 1-2 / 2-1
  static getDerivedStateFromProps(props: ClickMeProps, state: ClickMeState) {
    console.log("1-2 / 2-1 getDeruvedStateFromProps 호출됨")
    console.log('\tprops', props);
    console.log('\tstate', state);

    if(state.count > 10) {
      return { count: 30 }; // 새로운 값으로 state 업데이트
    }

    return null;  // state를 업데이트 하지 않음
  }

  // 2-2 단계: updating-shouldComponentUpdate(nextProps, nextState)
  shouldComponentUpdate(nextProps: ClickMeProps, nextState: ClickMeState) {
    console.log("2-2 shouldComponentUpDate 호출됨");
    console.log("\t현재값", this.props, this.state);
    console.log("\t다음값", nextProps, nextState);
    if(this.props.level === nextProps.level 
      && this.state.count === nextState.count) {
      return false; // render 호출 X
    } else {
      return true; // render 호출 O
    }
  }

  increase = () => {
    this.setState({ count: this.state.count + (this.props.level ?? 1)});
  }

  render() {
    console.log('1-3 / 2-3 render 호출')
    console.log(document.querySelector('button')?.textContent);
    // API 서버로부터 데이터 페칭 X
    return (
      <div>
        클릭 횟수 X { this.props.level || 1 }: { this.state.count }
        <button onClick={this.increase}>클릭</button>
      </div>
    )
  }

  // 1-4 
  componentDidMount() { // 함수형 컴포넌트에서는 useEffect() 훅이 이 역할을 한다
    // API 서버로부터 데이터 페칭과 같은 side effect가 발생하는 작업은 이곳에서 발생
    console.log('1-4 componentDidMount가 호출됨')
    console.log(document.querySelector('button')?.textContent);
  }

  // 2-4
  getSnapshotBeforeUpdate(preveProps: ClickMeProps, prevState: ClickMeState){
    console.log('2-4 getSnapshotBeforeUpdate 호출됨');
    return 'hello';
  }

  // 2-5
  componentDidUpdate(prevProps: ClickMeProps, prevState: ClickMeState, snapshot: string) {
    console.log('2-5 componentDidUpdate 호출됨.');
    console.log('\t이전값', prevProps, prevState);
    console.log('\t현재값', this.props, this.state);
    console.log('\tsnapshot', snapshot);
  }

  // 3-1 
  componentWillUmnount(): void {
    console.log('3-1 componentWillUmnount')
  }
}

export default Parent;