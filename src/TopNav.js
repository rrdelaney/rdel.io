import React, { Component } from 'react'
import glamorous from 'glamorous'
import { Link } from './Typo'

const NavBar = glamorous.div(props => ({
  zIndex: 999,
  position: 'fixed',
  backgroundColor: props.clear ? 'rgba(0, 0, 0, 0)' : 'smokewhite',
  height: '3rem',
  width: '100vw',
  top: props.isVisible ? 0 : '-3rem',
  paddingTop: '1rem',
  marginRight: '-2rem',
  transition: 'top .5s ease-out, background-color .5s ease-out',
  '@media print': {
    position: 'absolute',
    top: 0
  }
}))

export default class TopNav extends Component {
  state = {
    isVisible: false,
    isTop: true
  }

  styleOnScroll = () => {
    this.setState({
      isTop: window.scrollY < 10
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.styleOnScroll)

    this.isVisibleTimeout = setTimeout(() => {
      this.setState({ isVisible: true })
    }, 500)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.styleOnScroll)
    if (this.isVisibleTimeout) clearTimeout(this.isVisibleTimeout)
  }

  render() {
    const links = this.props.links.filter(l => !l.right).map(l =>
      <Link
        key={l.text}
        heading
        white={this.state.isTop}
        href={l.href}
        onClick={l.onClick}
      >
        {l.text}
      </Link>
    )

    const rightLinks = this.props.links.filter(l => !!l.right).map(l =>
      <Link
        key={l.text}
        heading
        hidePrint
        white={this.state.isTop}
        href={l.href}
        onClick={l.onClick}
        style={{ float: 'right' }}
      >
        {l.text}
      </Link>
    )

    return (
      <NavBar clear={this.state.isTop} isVisible={this.state.isVisible}>
        {links}
        {rightLinks}
      </NavBar>
    )
  }
}
