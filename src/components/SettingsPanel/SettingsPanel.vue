<template>
  <VueFinalModal
    v-model="isShow"
    :overlay-transition="'vfm-fade'"
    class="settings-panel-wrap"
    content-class="settings-panel"
  >
    <div class="settings-panel__inner">
      <section class="settings-panel__section">
        <h2 class="settings-panel__section-name">
          Common
        </h2>

        <hr>

        <div class="settings">
          <ToggleSwitch v-model="showJapaneseTitle.value" />
          <h3 class="settings__name">
            Change page title to Japanese (effect on browser/tab title)
          </h3>
        </div>
      </section>

      <section class="settings-panel__section">
        <h2 class="settings-panel__section-name">
          Gallery Enhancer
        </h2>

        <hr>

        <div class="settings">
          <ToggleSwitch v-model="scrollByRowSwitch.value" />
          <h3 class="settings__name">
            Scroll by Row
          </h3>
          <span class="settings__notice">
            *sync with "Front Page Enhancer - Scroll by Row"
          </span>
        </div>

        <div class="settings">
          <ToggleSwitch v-model="betterPopupSwitch.value" />
          <h3 class="settings__name">
            Better Popup
          </h3>

          <div class="settings__intro">
            <span>
              Action when clicking "Archive Download":
            </span>
            <select v-model="quickDownloadMethod.value">
              <option>
                {{ DownloadMethod.Manual }}
              </option>
              <option>
                {{ DownloadMethod.HaH_Original }}
              </option>
              <option>
                {{ DownloadMethod.HaH_2400 }}
              </option>
              <option>
                {{ DownloadMethod.Direct_Origin }}
              </option>
              <option>
                {{ DownloadMethod.Direct_Resample }}
              </option>
            </select>
            <p>
              *Notice: If you had changed the Archiver Settings, you have to change it back to "Manual Select, Manual Start (Default)" in the setting page:
              <a
                target="_blank"
                href="https://e-hentai.org/uconfig.php"
                rel="noreferrer noopener"
              >
                e-hentai
              </a>
              ,
              <a
                target="_blank"
                href="https://exhentai.org/uconfig.php"
                rel="noreferrer noopener"
              >
                exhentai
              </a>
            </p>
          </div>
        </div>

        <div class="settings">
          <ToggleSwitch v-model="loadAllGalleryImagesSwitch.value" />
          <h3 class="settings__name">
            Load All Gallery Images
          </h3>
        </div>
      </section>

      <section class="settings-panel__section">
        <h2 class="settings-panel__section-name">
          Multi-Page Viewer Enhancer
        </h2>

        <hr>

        <div class="settings">
          <ToggleSwitch v-model="multipageViewerEnhancerSwitch.value" />
          <h3 class="settings__name">
            Multi-Page Viewer Enhancer
          </h3>
        </div>

        <div class="settings">
          <ToggleSwitch v-model="preventImageRemovalSwitch.value" />
          <h3 class="settings__name">
            Prevent Image Removal
          </h3>
          <div class="settings__intro">
            <p>
              The original script of exhentai would remove the images which are too far from your current scroll.
            </p>
            <p>
              So if you scroll back to the images that have been removed.
              It might be flashing because although your browser has cached the image but still have to re-render it.
            </p>
          </div>
        </div>

        <div class="settings">
          <ToggleSwitch v-model="autoRedirectSwitch.value" />
          <h3 class="settings__name">
            Auto Redirect to Multi-Page Viewer
          </h3>
        </div>
      </section>

      <section class="settings-panel__section">
        <h2 class="settings-panel__section-name">
          Front Page Enhancer
        </h2>

        <hr>

        <div class="settings">
          <ToggleSwitch v-model="infiniteScrollSwitch.value" />
          <h3 class="settings__name">
            Infinite Scroll
          </h3>
        </div>

        <div class="settings">
          <ToggleSwitch v-model="scrollByRowSwitch.value" />
          <h3 class="settings__name">
            Scroll by Row
          </h3>
          <span class="settings__notice">
            *sync with "Gallery Enhancer - Scroll by Row"
          </span>
        </div>

        <div class="settings">
          <ToggleSwitch v-model="highlightSwitch.value" />
          <h3 class="settings__name">
            Highlight downloaded gallery
          </h3>
          <div class="settings__intro">
            Set background color of downloaded Gallery color to black.
          </div>
        </div>

        <div class="settings">
          <ToggleSwitch v-model="archiveButtonSwitch.value" />
          <h3 class="settings__name">
            Insert archiver buttons to galleries on the front page.
          </h3>
        </div>
      </section>
    </div>
    <span
      class="settings-panel__close-button"
      @click="isShow = false"
    >
      <CrossButton />
    </span>

    <div class="actions">
      <button
        class="actions__button"
        @click="reload"
      >
        Apply and Reload
      </button>
    </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { VueFinalModal } from 'vue-final-modal'
import { GM } from 'vite-plugin-monkey/dist/client'

import CrossButton from '@/components/Icon/CrossButton.vue'
import { DownloadMethod } from '@/constants/monkey'
import {
  infiniteScrollSwitch,
  archiveButtonSwitch,
  scrollByRowSwitch,
  betterPopupSwitch,
  quickDownloadMethod,
  loadAllGalleryImagesSwitch,
  multipageViewerEnhancerSwitch,
  preventImageRemovalSwitch,
  autoRedirectSwitch,
  showJapaneseTitle,
  highlightSwitch,
} from '@/utils/GMVariables'

import ToggleSwitch from './ToggleSwitch.vue'

const isShow = ref(false)
onMounted(() => {
  GM.registerMenuCommand('Open settings panel', () => isShow.value = !isShow.value)
})

function reload() {
  location.reload()
}

</script>

<style lang="scss">
.settings-panel-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.settings-panel {
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin: 32px;
  padding: 32px;
  max-width: 1000px;
  max-height: calc(100vh - 64px);
  background-color: #34353b;
  border-radius: 4px;
  color: #f1f1f1;

  &__inner {
    overflow-y: auto;
    padding-right: 16px;
    height: 100%;
  }

  &__section {
    background-color: #4f535b;
    border-radius: 4px;
  }

  &__section-name {
    margin: 16px 32px;
    padding-top: 16px;
    font-size: 20px;
    text-align: left;
    line-height: 100%;
  }

  &__close-button {
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 8px;
    cursor: pointer;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  a {
    color: #DDDDDD;
  }

  hr {
    background: #f1f1f1;
  }

  select {
    color: #f1f1f1;
    background-color: #34353b;
    outline: none;
  }
}

.settings {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  padding: 8px 16px;
  column-gap: 8px;

  &__name {
    font-size: 16px;
  }

  &__notice {
    font-size: 12px;
  }

  &__intro {
    margin-left: 60px;
    width: 100%;
    font-size: 14px;
    text-align: left;
  }
}

.actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &__button {
    padding: 8px 16px;
    color: #fff;
    background-color: #4f535b;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
