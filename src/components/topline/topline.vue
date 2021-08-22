<template>
  <div class="topline">
    <div class="container">
      <header class="topline__header">
        <slot name="header" />
      </header>
      <div class="topline__content" v-if="$slots.content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./topline.scss" scoped></style>
