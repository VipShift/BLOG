import styled from 'styled-components'
import { H2 } from '../../../../components'
import { Icon } from '../../../../components' //

const PostContentContainer = ({
  post: { id, title, content, imageUrl, publishedAt },
  className,
}) => {
  return (
    <div className={className}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title || 'image'}
          loading="lazy"
        />
      ) : null}
      <H2>{title}</H2>

      <div className="special-panel">
        <div className="published-at">
          <Icon
            id="fa-calendar-o"
            margin_r="10px"
            size="16px"
          />
          <div className="date">{publishedAt}</div>
        </div>

        <div className="buttons">
          <Icon
            id="fa-trash-o"
            margin_r="20px"
            size="22px"
          />
          <Icon
            id="fa-pencil-square-o"
            size="24px"
          />
        </div>
      </div>
      <div className="post-text">{content}</div>
    </div>
  )
}

export const PostContent = styled(PostContentContainer)`
  & img {
    float: left;
    margin-right: 20px;
    margin-bottom: 10px;
  }
  & .special-panel {
    display: flex;
    justify-content: space-between;
    margin: -20px 0 20px;
    font-size: 12px;
  }
  & h2 {
    font-size: 18px;
  }
  & .published-at {
    display: flex;
    position: relative;
    color: #afafaf;
  }

  & .buttons {
    display: flex;
    position: relative;
    top: -6px;
  }
  & .post-text {
    font-size: 12px;
    text-align: justify;
  }
`
