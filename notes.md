# Assessment

## Usage:

### The Good

Overall the interface for adjusting the properties is quite simple. It was intuitive that I needed to tap on the shape to update it.

### The Bad

I was not a fan of the physics introduced. There is nothing wrong with a bit of bounciness.
However when moving a shape from one side of the screen to another it should not fly around because of its acceleration.

## Implementation

### The Good

The code used a relatively modern standard of JavaScript. It made good use of array prototypes and I was glad to see some constants were created for referencing colours and sizes. Although it was not consistently utilised.

### The Bad

This was a very small project and there is nothing wrong with using libraries to speed up the development process. However, you need to utilise them correctly and spend the saved time focusing on improving the rest of your code.

You almost completely ignored the use of TypeScript by using type 'any' in a lot of your code.

It is bad practice to define variables and never use them. It pollutes the variable scope and is unnecessary.

- warning from the linter about 'Ref'

There was also some commented out code which should never happen.

## Bugs

- The first shape always snaps back to its origin after being moved.
- The control panel ui clips out of the interface when the shape is moved to the sides of the screen.
- The label does not show more than 3 characters, after which it cuts them off no matter the size of the shape.
  - After the code review, I see that this was a design decision. However, as mentioned in my comments it could have been improved.

## Overall impression

This was quite a reasonable attempt, especially considering it was submitted within 24 hours of its release. I know time constraints are a serious issue as a student but it would have been very beneficial to take an extra hour or two and squash some of the bugs/clean up the code. I liked your approach to working with the shape.
