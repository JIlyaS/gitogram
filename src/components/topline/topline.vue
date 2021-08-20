<template>
  <div class="topline">
    <div class="k-container">
      <header class="header">
        <slot name="header" />
      </header>
      <div class="content" v-if="$slots.content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./topline.scss" scoped></style>
