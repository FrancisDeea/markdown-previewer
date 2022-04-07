import  { marked } from 'marked';
import './App.scss';
import React from 'react';

marked.setOptions({
  breaks: true,
})


const exampleInput = 
  `# Welcome to my React Markdown Previewer!
## this is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.
  
// this is multi-line code:
\`\`\`
function anotherExample(firstLine, lastLine) {
  if (firstLine == "" && lastLine == "") {
    return multiLineCode;
  }
}
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`
class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      input: exampleInput,
    }
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <Editor input={this.state.input} handleChange={this.handleChange} />
        <Previewer output={this.state.input} />
      </div>
    )
  }
}

const Previewer = (props) => {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{__html: marked(props.output)}}
    />
  )
}

const Editor = (props) => {
  return (
    <div id="editor-container">
      <textarea 
            id="editor" 
            value={props.input}
            onChange={props.handleChange}
            autoFocus
      />
    </div>
  )
}

function App() {
  return (
    <main>
      <MarkdownPreviewer />
    </main>
  )
}

export default App;
