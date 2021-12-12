import styled from "styled-components";

const Main= (props)=>{
    return(
        <Container>
           <Sharebox>Share
            <div>
             
                <img src="/images/user.svg" alt="" />
               <button>Start a Post</button>
                
            </div>
            <div>
                <button>
                <img src="/images/photo-icon.png" alt="" />
                <span>Photo</span>
                </button>
                <button>
                    <img src="/images/video-icon.png" alt="" />
                    <span>Video</span>
                </button>
                <button>
                    <img src="/images/event-icon.png" alt="" />
                    <span>Events</span>
                </button>
                <button>
                    <img src="/images/article-icon.png" alt="" />
                    <span>Write article</span>
                </button>
            </div>
            </Sharebox>
            <div>
                <Article>
                    <SharedActor>
                        <a>
                            <img src="/images/user.svg" alt="" />
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                           
                        </a>
                        <button>
                        <img src="/images/ellipsis.png" alt="" />
                        </button>
                    </SharedActor>
                    <Description>Description</Description>
                    <SharedImage>
                        <a>
                            <img src="/images/shared-img.png" alt="" />
                        </a>
                    </SharedImage>
                    <SocialCount>
                        <li>
                            <button>
                                <img src="/images/like-icon.png" alt="" />
                                <img src="/images/clap-icon.png" alt="" />
                                <span>76</span>
                            </button>
                        </li>
                        <li><a> 2 comments</a></li>
                    </SocialCount>
                    <SocialActions>
                    <button>
                     <i class="far fa-thumbs-up"></i>
                    <span>Like</span>
                    </button>
                    <button>
                    <i class="far fa-comment"></i>
                    <span>Comment</span>
                    </button>
                     <button>
                     <i class="fas fa-share"></i>
                    <span>Share</span>
                    </button>
                    <button>
                    <i class="fab fa-telegram-plane"></i>
                    <span>Send</span>
                    </button>
                    </SocialActions>
                </Article>
            </div>
        </Container>
    )
}


const Container = styled.div` 
grid-area: two;
`;

const Commoncard = styled.div` 
text-align:center;
overflow: hidden;
margin-bottom: 8px;
background-color:#fff;
border-radius:5px;
position: relative;
border:none;
box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0/20%)
`;
const Sharebox = styled(Commoncard)` 
display: flex;
flex-direction: column;
color: #958b7b;
margin:0 0 8px;
background:white;
div{
    button{
        outline: none;
        color:rgba(0,0,0,0.6);
        font-size:14px;
        line-height:1.5;
        min-height:48px;
        background:transparent;
        border:none;
        display:flex;
        align-items: center;
        font-weight:600;
        img{
            width:48px;
            height:40px;
            align-items:center;
            margin: 0 4px 0 -2px;
        }
    }
    &:first-child{
        display:flex;
        align-items:center;
        padding: 8px 16px 0px 16px;
        img{
            width:48px;
            border-radius: 50%;
            margin-right: 8px;
        }
        button{
            margin: 4px 0;
            flex-grow:1;
            border-radius:35px;
            padding-left:16px;
            border:1px solid rgba(0,0,0,0.15);
            background-color: white;
            text-align:left;
        }
    }
    &:nth-child(2){
        display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
        padding-bottom:4px;

        span{
            color: #70b5f9;
        }

    }
}
`;
const Article= styled(Commoncard)` 
padding: 0;
margin: 0 0 8px;
overflow: visible;

`;
const SharedActor = styled.div` 
padding-right:40px ;
flex-wrap: nowrap;
padding: 12px 16px 0;
margin-bottom: 8px;
align-items: center;
display: flex;
a{
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    align-items: center;
    padding-bottom: 10px;
    img{
        width: 48px;
        height: 48px;
    }
    &>div{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-basis: 0;
        margin-left:8px;
        overflow: hidden;
        span{
            text-align:left;
            &:first-child{
                font-size: 14px;
                font-weight: 700;
                color: rgba(0,0,0,1);
            }
            &:nth-child(n+1){
                font-size: 12px;
                color: rgba(0,0,0,0.6);
            }
        }
    }
}
button{
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    width: 48px;
    height: 48px;
}
`;

const Description = styled.div` 
padding: 0 16px;
overflow: hidden;
color: rgba(0,0,0,0.9);
font-size: 14px;
text-align:left;
`;
const SharedImage = styled.div` 
margin-top: 8px;
width: 100%;
display: block;
position: relative;
background-color: #f9fafb;
img{
    object-fit: contain;
    width: 100%;
    height: 100%;
}
`;
const SocialCount= styled.ul` 
line-height: 1.3;
display: flex;
align-items: center;
overflow: auto;
margin: 0 16px;
padding: 8px 0;
border-bottom: 1px solid #e9e5df;
justify-content: space-between;
li{
    list-style: none;
    margin-right: 5px;
    font-size: 12px;
    span{
        align-items: center;
    }
}
button{
    display: flex;
    border: none;
    outline: none;
    background: transparent;
    img{
        width: 20px;
        height: 20px;
    }
}
`;
const SocialActions = styled.div` 
display: flex;
justify-content: space-evenly;
padding: 10px;
button{
    border: none;
    outline: none;
    background: transparent;
    color: rgba(0,0,0,0.6);
    display: flex;
    flex-direction: column;
    text-align:center;
    justify-content: center;
    margin: auto;
    
    i{
        margin: auto;
        
    }
}
`;
export default Main ;