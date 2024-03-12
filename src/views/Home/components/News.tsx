import React, { useState } from 'react'
import { Flex, Heading } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import styled, { css } from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ItemsCarousel from 'react-items-carousel'

const newsFeedData = [
  {
    id: 1,
    image: '/images/news_example.png',
    author: 'John Doe',
    date: '2023-03-10',
    title:
      '1: Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/',
  },
  {
    id: 2,
    image: '/images/news_example.png',
    author: 'Jane Smith',
    date: '2023-03-09',
    title:
      '2: Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/',
  },
  {
    id: 3,
    image: '/images/news_example.png',
    author: 'Bob Johnson',
    date: '2023-03-08',
    title:
      '3: Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/',
  },
  {
    id: 4,
    image: '/images/news_example.png',
    author: 'Alice Williams',
    date: '2023-03-07',
    title:
      '4: Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/',
  },
]

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

const StyledFlex = styled(Flex)`
  ${css`
    @media screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column-reverse;
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
      height: 60vw;
      width: 100%;
    }

    @media screen and (min-width: 1025px) {
      height: 70%;
      width: 100%;
    }
  `}
`

const NewsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: pointer;
`

const NewsImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`

const NewsAuthor = styled.p`
  font-size: 0.8rem;
  color: #8b1fff;
  margin-bottom: 0.5rem;
  ::before {
    content: 'By ';
  }
`

const NewsDate = styled.p`
  font-size: 0.8rem;
  color: #8b1fff;
  margin-bottom: 1rem;
`

const NewsTitle = styled.h3`
  font-size: 1.2rem;
  color: #000;
  text-align: left;
`

const News = () => {
  const { t } = useTranslation()
  const [activeItemIndex, setActiveItemIndex] = useState(0)

  const handleNewsClick = (link) => {
    window.open(link, '_blank') // 링크를 새 탭으로 열기
  }

  return (
    <>
      <StyledFlex
        flex={[null, null, null, '1']}
        mb={['24px', null, null, '0']}
        position="relative"
        alignItems="center"
        justifyContent="center"
      >
        <Heading scale="xl" color="#17022d" mb="24px" width="100%" textAlign="center">
          {t('Featured News')}
        </Heading>
      </StyledFlex>
      <ItemsCarousel
        infiniteLoop
        gutter={4}
        activePosition="center"
        chevronWidth={30}
        disableSwipe={false}
        alwaysShowChevrons
        numberOfCards={window.innerWidth > 768 ? 3 : 1}
        slidesToScroll={1}
        outsideChevron
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={(index) => setActiveItemIndex(index)}
        rightChevron={<ArrowForwardIcon style={{ color: 'purple' }} />}
        leftChevron={<ArrowBackIcon style={{ color: 'purple' }} />}
      >
        {newsFeedData.map((newsItem) => (
          <NewsItem onClick={() => handleNewsClick(newsItem.link)} key={newsItem.id}>
            <NewsImage src={newsItem.image} alt={newsItem.title} />
            <Flex justifyContent="space-around" width="100%">
              <NewsAuthor>{newsItem.author}</NewsAuthor>
              <NewsDate>{formatDate(newsItem.date)}</NewsDate>
            </Flex>
            <NewsTitle>{newsItem.title}</NewsTitle>
          </NewsItem>
        ))}
      </ItemsCarousel>
    </>
  )
}

export default News
