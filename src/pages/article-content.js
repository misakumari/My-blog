import img1 from "../assets/blog1.jpg"
import img2 from "../assets/blog2.jpg"
import img3 from "../assets/blog3.jpg"
const articles = [
    {
      name: "learn-react",
      title: "The Fastest Way to Learn React",
      thumbnail: img1,
      content: [
        `Welcome! Today we're going to be talking about the fastest way to learn React.React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library  for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies..`,
        `React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.`,
        `The following is a rudimentary example of React usage in HTML with JSX and JavaScript.`,

        `<div id="myReactApp"></div>`,
        `<script type="text/babel">`,
         ` function Greeter(props) {`,
         `   return <h1>{props.greeting}</h1>;`,
          `}`,
          `let App = <Greeter greeting="Hello World!" />;`,
          `ReactDOM.render(App, document.getElementById('myReactApp'));`,
        `</script>`,
      ]
    },
    {
      name: "learn-node",
      title: "How to Build a Node Server in 10 Minutes",
      thumbnail: img2,
      content: [
        `In this article, we're going to be talking looking at a very quick way to set up a Node.js server.Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.`,
        `Though .js is the standard filename extension for JavaScript code, the name "Node.js" doesn't refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).`,
        `Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
      ],
    },
    {
      name: "my-thoughts-on-learning-react",
      title: "My Thoughts on Learning ReactJS",
      thumbnail: img3,
      content: [
        `Today is the day I talk about something which scares most people: Learning ReactJS. In reality, I'm not sure why people have such a hard time with Learning ReactJS ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus euismod.`,
        `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        `Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
      ],
    },
  ];
  export default articles;
  
  