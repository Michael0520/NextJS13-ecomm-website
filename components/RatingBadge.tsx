import React, { FC } from "react"

import { Icons } from "./icons"
import { Badge } from "./ui/badge"

interface RatingBadgeProps extends React.HTMLProps<HTMLDivElement> {
  percentage?: number
  voteCount?: number
}

const RatingBadge: FC<RatingBadgeProps> = ({
  percentage = "50%",
  voteCount = "999",
  ...props
}) => {
  return (
    <div {...props}>
      <Badge className="gap-1">
        <Icons.recommend className="h-4 w-4" />
        <span className="text-xs">
          <span>{percentage}</span>
          <span>{`(${voteCount})`}</span>
        </span>
      </Badge>
    </div>
  )
}

export default RatingBadge
