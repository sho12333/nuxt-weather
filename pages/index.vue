<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
    <header class="bg-slate-800 text-white shadow-md">
      <div
        class="container mx-auto px-4 py-3 flex justify-between items-center"
      >
        <div class="text-2xl font-bold">アプリコレクション</div>

        <nav class="hidden md:flex space-x-6">
          <a href="#" class="hover:text-slate-200 transition">ホーム</a>
          <a href="#" class="hover:text-slate-200 transition">設定</a>
          <a href="#" class="hover:text-slate-200 transition">ヘルプ</a>
          <a href="#" class="hover:text-slate-200 transition">概要</a>
        </nav>

        <div class="flex items-center space-x-4">
          <div class="relative">
            <button
              class="bg-slate-500 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-md transition"
            >
              ログインユーザー▼
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="container mx-auto px-4 py-8"></div>

    <div class="container mx-auto px-4 py-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <div class="p-6">
            <div class="flex justify-center mb-4">
              <div class="bg-blue-100 p-4 rounded-full">
                <svg
                  class="w-12 h-12 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  ></path>
                </svg>
              </div>
            </div>
            <h2 class="text-xl font-bold text-center text-gray-800 mb-2">
              天気アプリ
            </h2>
            <p class="text-gray-600 text-center text-sm">
              現在の天気予報と週間天気予報をチェック
            </p>
            <div class="mt-6 text-center">
              <NuxtLink
                to="/weather"
                class="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md transition"
              >
                アプリを開く →
              </NuxtLink>
            </div>
          </div>
        </div>

        <div
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <div class="p-6">
            <div class="flex justify-center mb-4">
              <div class="bg-yellow-100 p-4 rounded-full">
                <svg
                  class="w-12 h-12 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <h2 class="text-xl font-bold text-center text-gray-800 mb-2">
              晴れ男判定アプリ
            </h2>
            <p class="text-gray-600 text-center text-sm">
              あなたが晴れ男/晴れ女かどうか判定します
            </p>
            <div class="mt-6 text-center">
              <a
                href="#"
                class="inline-block bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium py-2 px-4 rounded-md transition"
              >
                アプリを開く →
              </a>
            </div>
          </div>
        </div>

        <div
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <div class="p-6">
            <div class="flex justify-center mb-4">
              <div class="bg-green-100 p-4 rounded-full">
                <svg
                  class="w-12 h-12 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </div>
            </div>
            <h2 class="text-xl font-bold text-center text-gray-800 mb-2">
              チャットボットアプリ
            </h2>
            <p class="text-gray-600 text-center text-sm">
              AIチャットボットとの会話を楽しみましょう
            </p>
            <div class="mt-6 text-center">
              <a
                href="#"
                class="inline-block bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-md transition"
              >
                アプリを開く →
              </a>
            </div>
          </div>
        </div>

        <div
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <div class="p-6">
            <div class="flex justify-center mb-4">
              <div class="bg-purple-100 p-4 rounded-full">
                <svg
                  class="w-12 h-12 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  ></path>
                </svg>
              </div>
            </div>
            <h2 class="text-xl font-bold text-center text-gray-800 mb-2">
              メインアプリ
            </h2>
            <p class="text-gray-600 text-center text-sm">
              すべての機能にアクセスできるメインアプリ
            </p>
            <div class="mt-6 text-center">
              <a
                href="#"
                class="inline-block bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium py-2 px-4 rounded-md transition"
              >
                アプリを開く →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-10 text-center"></div>

    <footer class="bg-gray-50 border-t border-gray-100 py-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <p class="text-gray-500 text-sm">
              © 2025 sho12333. All rights reserved.
            </p>
          </div>
          <div class="flex space-x-4">
            <a
              href="#"
              class="text-gray-500 hover:text-gray-700 transition text-sm"
              >ヘルプ</a
            >
            <a
              href="#"
              class="text-gray-500 hover:text-gray-700 transition text-sm"
              >プライバシーポリシー</a
            >
            <a
              href="#"
              class="text-gray-500 hover:text-gray-700 transition text-sm"
              >利用規約</a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
