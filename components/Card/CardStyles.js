import styled from '@emotion/styled'

export const PostInfo = styled.div`
  margin: 1rem;
  h3 {
    margin: 0;
    padding: 0;
  }
`

export const Icon = styled.img`
  width: 1.3rem;
  transition: all 0.3s ease;

  &:active {
    transform: scale(1.2);
  }
`

export const Likes = styled.p`
  margin-left: 1rem;
  padding-bottom: 1rem;
`

export const ListPostImage = styled.img`
  width: 100%;
`

export const PostInteraction = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
  }
`
