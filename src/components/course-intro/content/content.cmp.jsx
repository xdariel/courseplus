import React from 'react';
import LeftContentCourseIntro2 from './left-content-course-intro-2.cmp';
import LeftContentCourseIntro from './left-content-course-intro.cmp';
import VideoDemo from './video-demo.cmp';



const Content = (props) => {
  let leftContent = null;
  let videoDemo  = null;

  switch (props.courseIntroId) {
    case 'course-intro-2':
      leftContent = <LeftContentCourseIntro2 />;
      videoDemo = <VideoDemo />;
      break;

      case 'course-intro':
        leftContent = <LeftContentCourseIntro />;
      break;
      
      default:
        leftContent =  null;
        videoDemo = null;
        break;
  }


  return (
    <div className="page-content">
      <div className="course-details-wrapper topic-1 uk-light">
         
        <div className="page-content-inner pt-lg-8 pb-0">
          <div className="mb-lg-5" uk-grid="true">
            
            {videoDemo}
            
            <div className="uk-width-2-3@m course-details pt-0">
              <h1> The Complete JavaScript Crash Course </h1>
              <p> Master JavaScript with the most complete course! Projects Excellent
                course. we explain the core concepts in javascript that are usually glossed over in
                other
                courses. And he does it in a manner that is clear and concise
                </p>
              <div className="uk-flex uk-flex-between uk-flex-bottom mt-lg-4">
                <div>
                  <div className="course-details-info">
                    <ul>
                      <li>
                        <div className="star-rating"><span className="avg"> 4.9 </span> <span className="star" /><span className="star" /><span className="star" /><span className="star" /><span className="star" />
                        </div>
                      </li>
                      <li> <i className="icon-feather-users" /> 1200 Enerolled </li>
                    </ul>
                  </div>
                  <div className="course-details-info">
                    <ul>
                      <li> Created by <a > Jonathan Madano </a> </li>
                      <li> Last updated 10/2019</li>
                    </ul>
                  </div>
                </div>
                <a href="takecouse.html" className="btn-course-start btn"> Start The Course
                  </a>
              </div>
            </div>


          </div>
          <nav className="responsive-tab style-5">
            <ul uk-switcher="connect: #course-intro-tab ;animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium">
              <li><a >Description</a></li>
              <li><a >Curriculum</a></li>
              <li><a >FAQ</a></li>
              <li><a >Announcement</a></li>
              <li><a >Reviews</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="page-content-inner">
        <div className="uk-grid-large" uk-grid="true">
          <div className="uk-width-2-3@m">
            <ul id="course-intro-tab" className="uk-switcher mt-4">
              {/* course description */}
              <li className="course-description-content">
                <h4> Description </h4>
                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                  minim laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat</p>
                <p> consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                  dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                    exerci</p>
                <h4> What you’ll learn </h4>
                <div className="uk-child-width-1-2@s" uk-grid="true">
                  <div>
                    <ul className="list-2">
                      <li>Setting up the environment </li>
                      <li>Advanced HTML Practices</li>
                      <li>Build a portfolio website</li>
                      <li>Responsive Designs</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-2">
                      <li>Understand HTML Programming</li>
                      <li>Code HTML</li>
                      <li>Start building beautiful websites</li>
                    </ul>
                  </div>
                </div>
                <h4> Requirements </h4>
                <ul className="list-1">
                  <li>Any computer will work: Windows, macOS or Linux</li>
                  <li>Basic programming HTML and CSS.</li>
                  <li>Basic/Minimal understanding of JavaScript</li>
                </ul>
                <h4> Here is exactly what we cover in this course: </h4>
                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                  minim laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat</p>
                <p> consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                  dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                    exerci</p>
                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                  minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Nam liber tempor cum soluta nobis eleifend option
                  congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum
                  dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                  veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                    ea commodo consequat.</p>
              </li>
              {/* course Curriculum*/}
              <li>
                <ul className="course-curriculum" uk-accordion="multiple: true">
                  <li className="uk-open">
                    <a className="uk-accordion-title" > Html Introduction </a>
                    <div className="uk-accordion-content">
                      {/* course-video-list */}
                      <ul className="course-curriculum-list">
                        <li> What is HTML <span> 23 min </span>
                        </li><li> What is a Web page? <span> 23 min </span> </li>
                        <li> Your First Web Page <a href="#trailer-modal" uk-toggle="true"> Preview
                            </a> <span> 23 min </span>
                        </li>
                        <li> Brain Streak <span> 23 min </span> </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a className="uk-accordion-title" > Your First webpage</a>
                    <div className="uk-accordion-content">
                      {/* course-video-list */}
                      <ul className="course-curriculum-list">
                        <li> Headings <span> 23 min </span>
                        </li><li> Paragraphs <span> 23 min </span> </li>
                        <li> Emphasis and Strong Tag <a href="#trailer-modal" uk-toggle="true"> Preview
                            </a> <span> 23 min
                            </span>
                        </li>
                        <li> Brain Streak <span> 23 min </span> </li>
                        <li> Live Preview Feature <span> 23 min </span> </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a className="uk-accordion-title" > Some Special Tags </a>
                    <div className="uk-accordion-content">
                      {/* course-video-list */}
                      <ul className="course-curriculum-list">
                        <li> The paragraph tag <span> 23 min </span> </li>
                        <li> The break tag <a href="#trailer-modal" uk-toggle="true"> Preview </a>
                          <span> 23 min </span> </li>
                        <li> Headings in HTML <span> 23 min </span> </li>
                        <li> Bold, Italics Underline <span> 23 min </span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a className="uk-accordion-title" > HTML Advanced level </a>
                    <div className="uk-accordion-content">
                      {/* course-video-list */}
                      <ul className="course-curriculum-list">
                        <li> Something to Ponder<span> 23 min </span> </li>
                        <li> Tables <span> 23 min </span> </li>
                        <li> HTML Entities <a href="#trailer-modal" uk-toggle="true"> Preview
                            </a><span> 23 min </span> </li>
                        <li> HTML Iframes <span> 23 min </span> </li>
                        <li> Some important things <span> 23 min </span> </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              {/* course Faq*/}
              <li>
                <h4 className="my-4"> Course Faq</h4>
                <ul className="course-faq" uk-accordion="true">
                  <li className="uk-open">
                    <a className="uk-accordion-title" > Html Introduction </a>
                    <div className="uk-accordion-content">
                      <p> The primary goal of this quick start guide is to introduce you to Unreal
                        Engine 4`s (UE4) development environment. By the end of this guide,
                        you`ll
                        know how to set up and develop C++ Projects in UE4. This guide shows you
                        how
                        to create a new Unreal Engine project, add a new C++ class to it,
                        compile
                        the project, and add an instance of a new class to your level. By the
                        time
                        you reach the end of this guide, you`ll be able to see your programmed
                        Actor
                          floating above a table in the level. </p>
                    </div>
                  </li>
                  <li>
                    <a className="uk-accordion-title" > Your First webpage</a>
                    <div className="uk-accordion-content">
                      <p> The primary goal of this quick start guide is to introduce you to Unreal
                        Engine 4`s (UE4) development environment. By the end of this guide,
                        you`ll
                        know how to set up and develop C++ Projects in UE4. This guide shows you
                        how
                        to create a new Unreal Engine project, add a new C++ class to it,
                        compile
                        the project, and add an instance of a new class to your level. By the
                        time
                        you reach the end of this guide, you`ll be able to see your programmed
                        Actor
                          floating above a table in the level. </p>
                    </div>
                  </li>
                  <li>
                    <a className="uk-accordion-title" > Some Special Tags </a>
                    <div className="uk-accordion-content">
                      <p> The primary goal of this quick start guide is to introduce you to Unreal
                        Engine 4`s (UE4) development environment. By the end of this guide,
                        you`ll
                        know how to set up and develop C++ Projects in UE4. This guide shows you
                        how
                        to create a new Unreal Engine project, add a new C++ class to it,
                        compile
                        the project, and add an instance of a new class to your level. By the
                        time
                        you reach the end of this guide, you`ll be able to see your programmed
                        Actor
                          floating above a table in the level. </p>
                    </div>
                  </li>
                  <li>
                    <a className="uk-accordion-title" > Html Introduction </a>
                    <div className="uk-accordion-content">
                      <p> The primary goal of this quick start guide is to introduce you to Unreal
                        Engine 4`s (UE4) development environment. By the end of this guide,
                        you`ll
                        know how to set up and develop C++ Projects in UE4. This guide shows you
                        how
                        to create a new Unreal Engine project, add a new C++ class to it,
                        compile
                        the project, and add an instance of a new class to your level. By the
                        time
                        you reach the end of this guide, you`ll be able to see your programmed
                        Actor
                          floating above a table in the level. </p>
                    </div>
                  </li>
                </ul>
              </li>
              {/* course Announcement*/}
              <li>
                <h4> Announcement </h4>
                <div className="user-details-card">
                  <div className="user-details-card-avatar">
                    <img alt="" src="assets/images/avatars/avatar-2.jpg"  />
                  </div>
                  <div className="user-details-card-name">
                    Stella Johnson <span> Instructor <span> 1 year ago </span> </span>
                  </div>
                </div>
                <article className="uk-article">
                  <p className="uk-text-lead"> Nam liber tempor cum soluta nobis eleifend option congue
                      nihil imperdiet doming.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia
                      deserunt mollit anim id est laborum.</p>
                  <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    aliquip ex ea commodo consequat. Nam liber tempor cum soluta nobis eleifend
                    option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                      aliquip ex ea commodo consequat.</p>
                </article>
              </li>
              {/* course Reviews*/}
              <li>
                <div className="review-summary">
                  <h4 className="review-summary-title"> Student feedback </h4>
                  <div className="review-summary-container">
                    <div className="review-summary-avg">
                      <div className="avg-number">
                        4.8
                        </div>
                      <div className="review-star">
                        <div className="star-rating"><span className="star" /><span className="star" /><span className="star" /><span className="star" /><span className="star half" /></div>
                      </div>
                      <span>Course Rating</span>
                    </div>
                    <div className="review-summary-rating">
                      <div className="review-summary-rating-wrap">
                        <div className="review-bars">
                          <div className="full_bar">
                            <div className="bar_filler" style={{ width: '95%' }} />
                          </div>
                        </div>
                        <div className="review-stars">
                          <div className="star-rating"><span className="star" /><span className="star" /><span className="star" /><span className="star" /><span className="star" /></div>
                        </div>
                        <div className="review-avgs">
                          95 %
                          </div>
                      </div>
                      <div className="review-summary-rating-wrap">
                        <div className="review-bars">
                          <div className="full_bar">
                            <div className="bar_filler" style={{ width: '80%' }} />
                          </div>
                        </div>
                        <div className="review-stars">
                          <div className="star-rating"><span className="star" /><span className="star" /><span className="star" /><span className="star" /><span className="star empty" /></div>
                        </div>
                        <div className="review-avgs">
                          80 %
                          </div>
                      </div>
                      <div className="review-summary-rating-wrap">
                        <div className="review-bars">
                          <div className="full_bar">
                            <div className="bar_filler" style={{ width: '60%' }} />
                          </div>
                        </div>
                        <div className="review-stars">
                          <div className="star-rating"><span className="star" /><span className="star" /><span className="star" /><span className="star empty" /><span className="star empty" />
                          </div>
                        </div>
                        <div className="review-avgs">
                          60 %
                          </div>
                      </div>
                      <div className="review-summary-rating-wrap">
                        <div className="review-bars">
                          <div className="full_bar">
                            <div className="bar_filler" style={{ width: '45%' }} />
                          </div>
                        </div>
                        <div className="review-stars">
                          <div className="star-rating"><span className="star" /><span className="star" /><span className="star empty" /><span className="star empty" /><span className="star empty" />
                          </div>
                        </div>
                        <div className="review-avgs">
                          45 %
                          </div>
                      </div>
                      <div className="review-summary-rating-wrap">
                        <div className="review-bars">
                          <div className="full_bar">
                            <div className="bar_filler" style={{ width: '25%' }} />
                          </div>
                        </div>
                        <div className="review-stars">
                          <div className="star-rating"><span className="star" /><span className="star empty" /><span className="star empty" /><span className="star empty" /><span className="star empty" />
                          </div>
                        </div>
                        <div className="review-avgs">
                          25 %
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comments">
                  <h4>Reviews <span className="comments-amount"> (4610) </span> </h4>
                  <ul>
                    <li>
                      <div className="comments-avatar"><img alt="" src="assets/images/avatars/avatar-2.jpg"  />
                      </div>
                      <div className="comment-content">
                        <div className="comment-by">Stella Johnson<span>Student</span>
                          <div className="comment-stars">
                            <div className="star-rating"><span className="star" /><span className="star" /><span className="star" /><span className="star" /><span className="star" /></div>
                          </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                          consequat.
                          </p>
                        <div className="comment-footer">
                          <span> Was this review helpful? </span>
                          <button> Yes </button>
                          <button> No </button>
                          <a > Report</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="comments-avatar"><img alt="" src="assets/images/avatars/avatar-3.jpg"  />
                      </div>
                      <div className="comment-content">
                        <div className="comment-by"> Adrian Mohani <span>Instructor </span>
                          <div className="comment-stars">
                            <div className="star-rating"><span className="star" /><span className="star" /><span className="star" /><span className="star" /><span className="star half" />
                            </div>
                          </div>
                        </div>
                        <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                          suscipit lobortis nisl ut aliquip ex ea commodo consequat. Nam liber
                          tempor cum soluta nobis eleifend
                          </p>
                        <div className="comment-footer">
                          <span> Was this review helpful? </span>
                          <button> Yes </button>
                          <button> No </button>
                          <a > Report</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="comments-avatar"><img alt="" src="assets/images/avatars/avatar-3.jpg"  />
                      </div>
                      <div className="comment-content">
                        <div className="comment-by"> Adrian Mohani <span>Student</span>
                          <div className="comment-stars">
                            <div className="star-rating"><span className="star" /><span className="star" /><span className="star" /><span className="star" /><span className="star" /></div>
                          </div>
                        </div>
                        <p> Nam liber tempor cum soluta nobis eleifend option congue nihil
                          imperdiet doming id quod mazim placerat facer possim assum. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                          nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.
                          </p>
                        <div className="comment-footer">
                          <span> Was this review helpful? </span>
                          <button> Yes </button>
                          <button> No </button>
                          <a > Report</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="comments-avatar"><img alt="" src="assets/images/avatars/avatar-2.jpg"  />
                      </div>
                      <div className="comment-content">
                        <div className="comment-by">Stella Johnson<span>Student</span>
                          <div className="comment-stars">
                            <div className="star-rating"><span className="star" /><span className="star" /><span className="star" /><span className="star" /><span className="star" /></div>
                          </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                          consequat.
                          </p>
                        <div className="comment-footer">
                          <span> Was this review helpful? </span>
                          <button> Yes </button>
                          <button> No </button>
                          <a > Report</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="comments">
                  <h3>Submit Review </h3>
                  <ul>
                    <li>
                      <div className="comments-avatar"><img alt="" src="assets/images/avatars/avatar-2.jpg"  />
                      </div>
                      <div className="comment-content">
                        <form className="uk-grid-small" uk-grid="true">
                          <div className="uk-width-1-2@s">
                            <label className="uk-form-label">Name</label>
                            <input className="uk-input" type="text" placeholder="Name" />
                          </div>
                          <div className="uk-width-1-2@s">
                            <label className="uk-form-label">Email</label>
                            <input className="uk-input" type="text" placeholder="Email" />
                          </div>
                          <div className="uk-width-1-1@s">
                            <label className="uk-form-label">Comment</label>
                            <textarea className="uk-textarea" placeholder="Enter Your Comments her..." style={{ height: '160px' }} defaultValue={""} />
                          </div>
                          <div className="uk-grid-margin">
                            <input type="submit" defaultValue="submit" className="button success" />
                          </div>
                        </form>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="uk-width-1-3@s">
                  </div>
                  <div className="uk-width-expand@s">
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {leftContent}



        </div>
      </div>
    </div>
  );
}

export default Content;