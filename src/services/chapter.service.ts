import { api } from '@/api/instance.api'

import type { Chapter, ChapterResponse } from '@/types/chapter.interface'

class ChapterService {
	public async findAll() {
		const response = await api.get<Chapter[]>('chapters')

		return response
	}

	public async findBySlug(slug: string) {
		const response = await api.get<ChapterResponse>(
			`chapters/by-slug/${slug}`
		)

		return response
	}
}

export const chapterService = new ChapterService()
