import { ComponentProps } from 'react'
import { NotePreview } from './NotePreview'
import { twMerge } from 'tailwind-merge'
import { notesMock } from '../store/mocks'

export const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>): JSX.Element => {
  if (notesMock.length === 0) {
    return (
      <ul className={twMerge('pt-4', className)}>
        <span>No Notes yet!</span>
      </ul>
    )
  }

  return (
    <ul {...props}>
      {notesMock.map((note) => (
        <NotePreview key={note.title + note.lastEditTime} {...note} />
      ))}
    </ul>
  )
}
