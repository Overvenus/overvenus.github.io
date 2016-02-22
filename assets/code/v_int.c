#include <stdio.h>

volatile int foo;

void main(void) {
    foo = 0xff;
    printf("%d\n", foo);
    foo = 0xff;
    printf("%d\n", foo);
}