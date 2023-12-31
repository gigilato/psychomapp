import { render } from '@testing-library/react-native'

import { Tag, TagContainer } from './Tag'

const mockTags = [
  { tag: 'tag1', backgroundColor: '#ff00ff' },
  { tag: 'tag2', backgroundColor: '#4f00ff' },
  { tag: 'tag3', backgroundColor: '#f0007f' },
]

describe('Tag', () => {
  it('should render correctly', async () => {
    const Component = render(
      <TagContainer gap={8}>
        {mockTags.map((tag) => (
          <Tag key={tag.tag} {...tag} />
        ))}
      </TagContainer>
    )

    expect(Component).toMatchSnapshot()
  })
})
