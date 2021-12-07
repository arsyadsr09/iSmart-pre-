import styled from "@emotion/styled"

export const RowSpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &.start {
    align-items: flex-start;
  }
`

export const RowEnd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const RowStart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &.align-start {
    align-items: flex-start;
  }
`

export const ColStart = styled.div`
  display: flex;
  flex-direction: column;
  &.stretch {
    align-items: stretch;
  }
`

export const ColCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.start {
    align-items: flex-start;
  }
`

export const RowCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const ColSpaceBetween = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &.stretch {
    align-items: stretch;
  }
`
